import logging
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

logger = logging.getLogger(__name__)


class DashCoreComponentsMixin(object):
    def select_date_single(self, compid, index=0, day="", outside_month=False):
        """Select Date in DPS component with either index or day
        compid: the id defined for component
        index: the index for all visibles in the popup calendar
        day: a number or string; if set, use this to select instead of index
        outside_month: used in conjunction with day. indicates if the day out
            the scope of current month. default False.
        """
        date = self.find_element("#{} input".format(compid))
        date.click()

        def is_month_valid(elem):
            return (
                "__outside" in elem.get_attribute("class")
                if outside_month
                else "__outside" not in elem.get_attribute("class")
            )

        self._wait_until_day_is_clickable()
        days = self.find_elements(self.date_picker_day_locator)
        if day:
            filtered = [
                _ for _ in days if _.text == str(day) and is_month_valid(_)
            ]
            if not filtered or len(filtered) > 1:
                logger.error(
                    "cannot find the matched day with index=%s, day=%s",
                    index,
                    day,
                )
            matched = filtered[0]
        else:
            matched = days[index]

        matched.click()
        return date.get_attribute("value")

    def select_date_range(self, compid, day_range, start_first=True):
        """Select Date in DPR component with a day_range tuple
        compid: the id defined for component
        day_range: a tuple or list, defines the start and end date you want to
            select, the tuple must be length of 1 or 2, i.e.
            (start, ) or (start, end)
        start_first: boolean value decides clicking start or end date.
            default True
        """

        if (
            not day_range
            or not isinstance(day_range, (tuple, list))
            or not set(range(1, 32)).issuperset(day_range)
            or len(day_range) > 2
        ):
            logger.error(
                "data_range is provided with an invalid value %s\n"
                "the accepted range is range(1, 32)",
                day_range,
            )
            return

        date = self.find_element(
            '#{} input[aria-label="{} Date"]'.format(
                compid, "Start" if start_first else "End"
            )
        )
        date.click()
        for day in day_range:
            self._wait_until_day_is_clickable()
            matched = [
                _
                for _ in self.find_elements(self.date_picker_day_locator)
                if _.text == str(day)
            ]
            matched[0].click()

        return self.get_date_range(compid)

    def get_date_range(self, compid):
        return tuple(
            _.get_attribute("value")
            for _ in self.find_elements("#{} input".format(compid))
        )

    def _wait_until_day_is_clickable(self, timeout=1):
        WebDriverWait(self.driver, timeout).until(
            EC.element_to_be_clickable(
                (By.CSS_SELECTOR, self.date_picker_day_locator)
            )
        )

    @property
    def date_picker_day_locator(self):
        return 'div[data-visible="true"] td.CalendarDay'

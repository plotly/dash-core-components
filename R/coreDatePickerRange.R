# AUTO GENERATED FILE - DO NOT EDIT

coreDatePickerRange <- function(initial_visible_month=NULL, reopen_calendar_on_clear=NULL, disabled=NULL, id=NULL, updatemode=NULL, number_of_months_shown=NULL, min_date_allowed=NULL, max_date_allowed=NULL, dashEvents=NULL, first_day_of_week=NULL, clearable=NULL, display_format=NULL, start_date=NULL, stay_open_on_select=NULL, end_date=NULL, month_format=NULL, is_RTL=NULL, show_outside_days=NULL, calendar_orientation=NULL, with_full_screen_portal=NULL, fireEvent=NULL, with_portal=NULL, minimum_nights=NULL, day_size=NULL, start_date_placeholder_text=NULL, end_date_placeholder_text=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(initial_visible_month=initial_visible_month, reopen_calendar_on_clear=reopen_calendar_on_clear, disabled=disabled, id=id, updatemode=updatemode, number_of_months_shown=number_of_months_shown, min_date_allowed=min_date_allowed, max_date_allowed=max_date_allowed, dashEvents=dashEvents, first_day_of_week=first_day_of_week, clearable=clearable, display_format=display_format, start_date=start_date, stay_open_on_select=stay_open_on_select, end_date=end_date, month_format=month_format, is_RTL=is_RTL, show_outside_days=show_outside_days, calendar_orientation=calendar_orientation, with_full_screen_portal=with_full_screen_portal, fireEvent=fireEvent, with_portal=with_portal, minimum_nights=minimum_nights, day_size=day_size, start_date_placeholder_text=start_date_placeholder_text, end_date_placeholder_text=end_date_placeholder_text, ...),
        type = 'DatePickerRange',
        namespace = 'dash_core_components',
        propNames = c('initial_visible_month', 'reopen_calendar_on_clear', 'disabled', 'id', 'updatemode', 'number_of_months_shown', 'min_date_allowed', 'max_date_allowed', 'dashEvents', 'first_day_of_week', 'clearable', 'display_format', 'start_date', 'stay_open_on_select', 'end_date', 'month_format', 'is_RTL', 'show_outside_days', 'calendar_orientation', 'with_full_screen_portal', 'fireEvent', 'with_portal', 'minimum_nights', 'day_size', 'start_date_placeholder_text', 'end_date_placeholder_text', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}
# AUTO GENERATED FILE - DO NOT EDIT

coreDatePickerSingle <- function(initial_visible_month=NULL, reopen_calendar_on_clear=NULL, disabled=NULL, id=NULL, number_of_months_shown=NULL, min_date_allowed=NULL, max_date_allowed=NULL, dashEvents=NULL, first_day_of_week=NULL, clearable=NULL, display_format=NULL, stay_open_on_select=NULL, month_format=NULL, is_RTL=NULL, show_outside_days=NULL, calendar_orientation=NULL, date=NULL, with_full_screen_portal=NULL, placeholder=NULL, fireEvent=NULL, with_portal=NULL, day_size=NULL, ...) {

    wildcard_names = names(list(...))
    
    component <- list(
        props = list(initial_visible_month=initial_visible_month, reopen_calendar_on_clear=reopen_calendar_on_clear, disabled=disabled, id=id, number_of_months_shown=number_of_months_shown, min_date_allowed=min_date_allowed, max_date_allowed=max_date_allowed, dashEvents=dashEvents, first_day_of_week=first_day_of_week, clearable=clearable, display_format=display_format, stay_open_on_select=stay_open_on_select, month_format=month_format, is_RTL=is_RTL, show_outside_days=show_outside_days, calendar_orientation=calendar_orientation, date=date, with_full_screen_portal=with_full_screen_portal, placeholder=placeholder, fireEvent=fireEvent, with_portal=with_portal, day_size=day_size, ...),
        type = 'DatePickerSingle',
        namespace = 'dash_core_components',
        propNames = c('initial_visible_month', 'reopen_calendar_on_clear', 'disabled', 'id', 'number_of_months_shown', 'min_date_allowed', 'max_date_allowed', 'dashEvents', 'first_day_of_week', 'clearable', 'display_format', 'stay_open_on_select', 'month_format', 'is_RTL', 'show_outside_days', 'calendar_orientation', 'date', 'with_full_screen_portal', 'placeholder', 'fireEvent', 'with_portal', 'day_size', wildcard_names),
        package = 'dashCoreComponents'
        )

    component$props <- filter_null(component$props)
    
    structure(component, class = c('dash_component', 'list'))    
}
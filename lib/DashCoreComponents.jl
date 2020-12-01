
module DashCoreComponents
using DashBase

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.13.0"

include("dcc_checklist.jl")
include("dcc_confirmdialog.jl")
include("dcc_confirmdialogprovider.jl")
include("dcc_datepickerrange.jl")
include("dcc_datepickersingle.jl")
include("dcc_dropdown.jl")
include("dcc_graph.jl")
include("dcc_input.jl")
include("dcc_interval.jl")
include("dcc_link.jl")
include("dcc_loading.jl")
include("dcc_location.jl")
include("dcc_logoutbutton.jl")
include("dcc_markdown.jl")
include("dcc_radioitems.jl")
include("dcc_rangeslider.jl")
include("dcc_slider.jl")
include("dcc_store.jl")
include("dcc_tab.jl")
include("dcc_tabs.jl")
include("dcc_textarea.jl")
include("dcc_upload.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_core_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-datepicker.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-datepicker.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-dropdown.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-dropdown.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-graph.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-graph.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-highlight.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-highlight.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-markdown.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-markdown.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-slider.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-slider.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-upload.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-upload.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-datepicker.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-datepicker.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-dropdown.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-dropdown.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-graph.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-graph.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-highlight.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-highlight.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-markdown.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-markdown.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-slider.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-slider.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-upload.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-upload.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components.min.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/dash_core_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components.min.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/dash_core_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components-shared.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/dash_core_components-shared.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components-shared.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/dash_core_components-shared.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "plotly.min.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/plotly.min.js",
    dynamic = nothing,
    async = :eager,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-plotlyjs.js",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-plotlyjs.js",
    dynamic = nothing,
    async = :lazy,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-plotlyjs.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.13.0/dash_core_components/async-plotlyjs.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end

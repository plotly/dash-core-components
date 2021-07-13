
module DashCoreComponents
using DashBase

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.17.1"

include("jl/dcc_checklist.jl")
include("jl/dcc_clipboard.jl")
include("jl/dcc_confirmdialog.jl")
include("jl/dcc_confirmdialogprovider.jl")
include("jl/dcc_datepickerrange.jl")
include("jl/dcc_datepickersingle.jl")
include("jl/dcc_download.jl")
include("jl/dcc_dropdown.jl")
include("jl/dcc_graph.jl")
include("jl/dcc_input.jl")
include("jl/dcc_interval.jl")
include("jl/dcc_link.jl")
include("jl/dcc_loading.jl")
include("jl/dcc_location.jl")
include("jl/dcc_logoutbutton.jl")
include("jl/dcc_markdown.jl")
include("jl/dcc_radioitems.jl")
include("jl/dcc_rangeslider.jl")
include("jl/dcc_slider.jl")
include("jl/dcc_store.jl")
include("jl/dcc_tab.jl")
include("jl/dcc_tabs.jl")
include("jl/dcc_textarea.jl")
include("jl/dcc_upload.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_core_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-datepicker.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-datepicker.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-dropdown.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-dropdown.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-graph.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-graph.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-highlight.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-highlight.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-markdown.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-markdown.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-slider.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-slider.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-upload.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-upload.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-datepicker.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-datepicker.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-dropdown.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-dropdown.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-graph.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-graph.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-highlight.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-highlight.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-markdown.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-markdown.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-slider.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-slider.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-upload.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-upload.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/dash_core_components.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/dash_core_components.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components-shared.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/dash_core_components-shared.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_core_components-shared.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/dash_core_components-shared.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "plotly.min.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/plotly.min.js",
    dynamic = nothing,
    async = :eager,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-plotlyjs.js",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-plotlyjs.js",
    dynamic = nothing,
    async = :lazy,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-plotlyjs.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.17.1/dash_core_components/async-plotlyjs.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end

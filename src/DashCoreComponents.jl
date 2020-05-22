
module DashCoreComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.4.0"

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
    Dash.register_package(
        Dash.ResourcePkg(
            "dash_core_components",
            resources_path,
            version = version,
            [
                Dash.Resource(
    relative_package_path = "highlight.pack.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
Dash.Resource(
    relative_package_path = "dash_core_components.min.js",
    external_url = "https://unpkg.com/dash-core-components@1.4.0/dash_core_components/dash_core_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
Dash.Resource(
    relative_package_path = "dash_core_components.min.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.4.0/dash_core_components/dash_core_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
Dash.Resource(
    relative_package_path = "async~graph.js",
    external_url = "https://unpkg.com/dash-core-components@1.4.0/dash_core_components/async~graph.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
Dash.Resource(
    relative_package_path = "async~graph.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.4.0/dash_core_components/async~graph.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
Dash.Resource(
    relative_package_path = "plotly-1.50.1.min.js",
    external_url = "https://unpkg.com/dash-core-components@1.4.0/dash_core_components/plotly-1.50.1.min.js",
    dynamic = nothing,
    async = :eager,
    type = :js
),
Dash.Resource(
    relative_package_path = "async~plotlyjs.js",
    external_url = "https://unpkg.com/dash-core-components@1.4.0/dash_core_components/async~graph~plotlyjs.js",
    dynamic = nothing,
    async = :lazy,
    type = :js
),
Dash.Resource(
    relative_package_path = "async~plotlyjs.js.map",
    external_url = "https://unpkg.com/dash-core-components@1.4.0/dash_core_components/async~graph~plotlyjs.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )
    )
end
end

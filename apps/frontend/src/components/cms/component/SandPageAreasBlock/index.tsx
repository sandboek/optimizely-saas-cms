import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { SandPageAreasBlock, SandPageAreasBlockDataFragmentDoc, type SandPageAreasBlockDataFragment } from "@/gql/graphql";

/**
 * Sand Page Areas Block
 * A container for 11 distinct sections
 */
export const SandPageAreasBlockComponent : CmsComponent<SandPageAreasBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Sand Page Areas Block'
    const componentInfo = 'A container for 11 distinct sections'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
SandPageAreasBlockComponent.displayName = "Sand Page Areas Block (Component/SandPageAreasBlock)"
SandPageAreasBlockComponent.getDataFragment = () => ['SandPageAreasBlockData', SandPageAreasBlockDataFragmentDoc];

export default SandPageAreasBlockComponent

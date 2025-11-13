import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { SandHomepage2DataFragmentDoc, type SandHomepage2DataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Sand Homepage 2
 * 
 */
export const SandHomepage2Page : CmsComponent<SandHomepage2DataFragment> = ({ data }) => {
    const componentName = 'Sand Homepage 2'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
SandHomepage2Page.displayName = "Sand Homepage 2 (Page/SandHomepage2)"
SandHomepage2Page.getDataFragment = () => ['SandHomepage2Data', SandHomepage2DataFragmentDoc]
SandHomepage2Page.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default SandHomepage2Page
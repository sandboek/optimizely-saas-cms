import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { SandPageDataFragmentDoc, type SandPageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Sand Page
 * 
 */
export const SandPagePage : CmsComponent<SandPageDataFragment> = ({ data }) => {
    const componentName = 'Sand Page'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
SandPagePage.displayName = "Sand Page (Page/SandPage)"
SandPagePage.getDataFragment = () => ['SandPageData', SandPageDataFragmentDoc]
SandPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default SandPagePage
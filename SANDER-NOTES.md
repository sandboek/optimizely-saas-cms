# Personal notes
nvm use 25.1.0, then:
choco install yarn latest
yarn install

Create .env.loval (apps/frontend) with:
  # Optimizely Global
  OPTIMIZELY_DEBUG=1
  DEBUG=opti-cms:*


  # Optimizely Graph
  OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com/
  OPTIMIZELY_GRAPH_APP_KEY=ElRnhQaiZy4jXLiV1impbEhnAzUSaLWk5yCcNJLW3jpyBIqR
  OPTIMIZELY_GRAPH_SECRET=AzFc6W+JHx3Zc4N2UvXiCFvhO89sFngsJhX0vmpNitY9oTJg79ulNukUDWgO5JJ1
  OPTIMIZELY_GRAPH_SINGLE_KEY=xR5hWMh5fbjBNJeVLNOJeJE1HOFhiRUsO4Dic4kWMzNfonu1
  OPTIMIZELY_GRAPH_UPDATE_DELAY=2000
  OPTIMIZELY_GRAPH_QUERY_LOG=1

  # Optimizely CMS
  OPTIMIZELY_CMS_URL=https://app-mane02saasqmc22t002.cms.optimizely.com
  OPTIMIZELY_CMS_CLIENT_ID=ce695e1793ec42cb815a970622a39062
  OPTIMIZELY_CMS_CLIENT_SECRET=eYrv0PV2QJPqT4WMbSSoTQLW1DliN3VFuUeqIArUkXkZSrNY
  #OPTIMIZELY_CMS_USER_ID=Sander

  # Frontend specfic
  #SITE_DOMAIN=localhost:3000
  #OPTIMIZELY_PUBLISH_TOKEN=optly-5d5216fe-047f-49e3-b8c6-579712b3606e

  #NODE_TLS_REJECT_UNAUTHORIZED=0

yarn opti-cms nextjs:create :
  It scaffolds Next.js component/code for your Optimizely CMS content types so the CMS data renders as real React components instead of raw JSON.

  What it does (summary)

  Reads your Optimizely Graph schema (uses your configured graph/gateway env vars).
  Generates placeholder React components for blocks/elements/pages (usually under src/components/cms or src/components/component/*).
  Creates/updates a component resolver/mapping so content type -> React component is wired.
  Adds helper code (image helpers, prop types, example fragments) and updates project config if needed.
  Saves you from hand-coding all content-type components so pages render visually.

yarn opti-graph patches:apply :
  runs the project’s Optimizely Graph CLI task that applies the repository’s curated patches to the Graph client/schema/codegen output so the generated Graph artifacts match the project/CMS expectations.


yarn compile --verbose :
  "yarn compile" runs the project's "compile" script from package.json. In this repo it typically runs the Graph/codegen/patch steps that generate GraphQL client/types and any build tasks that prepare generated assets (codegen → patches → TS compile), but the exact steps are defined in package.json.

yarn run build
yarn dev

P.S. Use yarn add --dev @remkoj/optimizely-cms-cli  if you want to fully clean up and reset the cms with command cms:reset (https://github.com/remkoj/optimizely-dxp-clients/tree/main/packages/optimizely-cms-cli#3-available-commands) 

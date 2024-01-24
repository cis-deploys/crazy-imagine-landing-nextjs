import dynamic from "next/dynamic"
import Layout from "../../components/Layout"

const SectionHeader = dynamic(() => import("../../components/SectionHeader"), {
  ssr: false,
})
const TechnicalDiscovery = dynamic(
  () => import("../../components/TechnicalDiscovery"),
  {
    ssr: false,
  }
)

function technicalDiscovery() {
  return (
    <Layout>
      <TechnicalDiscovery />
    </Layout>
  )
}
export default technicalDiscovery

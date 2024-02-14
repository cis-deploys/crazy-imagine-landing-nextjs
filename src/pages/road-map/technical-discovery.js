import dynamic from "next/dynamic"
import Layout from "../../components/Layout"
import { Box } from "@mui/material"
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
      <Box overflow="hidden">
        <TechnicalDiscovery />
      </Box>
    </Layout>
  )
}
export default technicalDiscovery

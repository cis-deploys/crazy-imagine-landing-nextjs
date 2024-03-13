import dynamic from "next/dynamic"
import { Box } from "@mui/material"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const TechnicalDiscovery = dynamic(
  () => import("../../components/TechnicalDiscovery"),
  {
    ssr: false,
  }
)

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
function technicalDiscovery() {
  return (
   <>
      <Box overflow="hidden">
        <TechnicalDiscovery />
      </Box>
      </>
  )
}
export default technicalDiscovery

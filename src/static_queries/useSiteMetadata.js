import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              email
              github_handle
              twitter_handle
            }
            cta
            description
            background_color
          }
          licenseData {
            license_header
            license_subheader
            license_content
          }
          privacyData {
            privacy_header
            privacy_subheader
            privacy_content
          }
          socialMediaLinkData {
            socialMediaLink_header
            socialMediaLink_title_0
            socialMediaLink_link_0
            socialMediaLink_title_1
            socialMediaLink_link_1
            socialMediaLink_title_2
            socialMediaLink_link_2
          }
          homeData {
            home_content
            home_content_1
            home_header
            home_content_header
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
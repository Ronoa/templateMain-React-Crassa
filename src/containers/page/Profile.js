import React from 'react'
import MenuProfile from 'components/profile/MenuProfile'
import ContentSectionBody from 'components/section_page/contentSectionBody'

// import ContentSectionBody from 'components/Common/sections/contentSectionBody'
// import TableProducts from 'components/products/tableProducts'
// import TitleSection from 'components/Common/sections/titleSection'
// import HeaderSection from 'components/landing/HeaderSection'

// import { Divider } from '@material-ui/core'
// import FormContactUs from 'components/ContactUs/formContact'

const titleBody = {
  title: 'Perfil del usuario',
  description: 'Configuraciones de la cuenta',
  iscreated: false,
}

export default function ProfilePage() {
  return (
    <div>
      <ContentSectionBody
        isSectionTransparent={true}
        sectionRender={<MenuProfile />}
      />
    </div>
  )
}

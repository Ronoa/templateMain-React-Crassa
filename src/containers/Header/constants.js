import { AssignmentInd, Bookmark, Settings, Dns } from '@material-ui/icons'

export const menuOptions = [
  {
    text    : 'Convocatorias',
    iconMenu: Dns,
    href    : '/'
  },
  {
    text    : 'Usuarios',
    iconMenu: AssignmentInd,
    href    : '/counter/1'
  },
  {
    text    : 'Roles',
    iconMenu: Bookmark,
    href    : '/counter/2'
  },
  {
    text    : 'Configuración',
    iconMenu: Settings,
    href    : '/counter/1'
  }
]

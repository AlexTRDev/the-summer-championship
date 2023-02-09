import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Asistaints, Calendars, Classification, Loader, MVP, Player, Scorers, TeamStats } from '../components'
import {
  CalendarLayout,
  EquiposLayout,
  LaPollaLayout,
  LayoutApp,
  PlayersLayout,
  ReglamentoLayout,
  StatsLayout,
} from '../layouts'
import Contacto from '../layouts/Contacto'

import ProtectedRoutes from './ProtectedRoutes.routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route path="Equipos" element={<EquiposLayout />}>
        <Route path=":teamId" element={<PlayersLayout />} />
      </Route>
      <Route path="Calendario" element={<CalendarLayout />} />
      <Route path="Estadisticas" element={<StatsLayout />}>
        <Route path="clasificacion" element={<Classification />} />
        <Route path="mvp" element={<MVP />} />
        <Route path="goleadores" element={<Scorers />} />
        <Route path="asistencias" element={<Asistaints />} />
      </Route>
      <Route path="Contacto" element={<Contacto />} />
      <Route path="Sobre-mi" element={<Player />} />
      <Route path="Reglamento" element={<ReglamentoLayout />} />
      <Route path="admin/clasificacion" element={<TeamStats />} />
      <Route path="admin/calendars" element={<Calendars />} />
      <Route path="LaPolla" element={<LaPollaLayout />} />
      <Route path="register" element={<Loader />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="profile" element={<h1>profile</h1>} />
      </Route>
    </Route>
  )
)

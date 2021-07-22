import React from "react";
import * as FaIcons from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

export const SidebarData = [
  {
    title: "Início",
    path: "/home",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "Protocolos",
    path: "/protocols",
    icon: <FaIcons.FaRegFileAlt />,
    cName: "nav-text",
  },
  {
    title: "Notificações",
    path: "/notifications",
    icon: <div><FaIcons.FaExclamation /> <Badge bg="secondary"></Badge></div>,
    cName: "nav-text",
  },
  {
    title: "Gráficos de Evolução",
    path: "/exams",
    icon: <FaIcons.FaSignal />,
    cName: "nav-text",
  },
  // {
  //   title: "Receitas",
  //   path: "/recipes",
  //   icon: <FaIcons.FaNotesMedical />,
  //   cName: "nav-text",
  // },
  {
    title: "Questionários",
    path: "/questionnaires",
    icon: <FaIcons.FaRegCopy />,
    cName: "nav-text",
  },
  {
    title: "Equipe & Médicos",
    path: "/contacts",
    icon: <FaIcons.FaUserMd />,
    cName: "nav-text",
  },
  {
    title: "Material Didático",
    path: "/library",
    icon: <FaIcons.FaBook />,
    cName: "nav-text",
  },
  {
    title: "Agendamentos",
    path: "/scheduling",
    icon: <FaIcons.FaRegCalendarAlt />,
    cName: "nav-text",
  },
  {
    title: "Conquistas",
    path: "/achievements",
    icon: <FaIcons.FaTrophy />,
    cName: "nav-text",
  },
  {
    title: "Dúvidas Frequentes",
    path: "/doubts",
    icon: <FaIcons.FaRegCommentDots />,
    cName: "nav-text",
  },
  {
    title: "Meu Perfil",
    path: "/profile",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Sair",
    path: "/exit",
    icon: <FaIcons.FaSignOutAlt />,
    cName: "nav-text",
  },
];

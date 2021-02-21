import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/fa';


export const SidebarData = [
    {
        title: 'Início',
        path: '/home',
        icon: <FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Protocolos',
        path: '/protocols',
        icon: <FaIcons.FaRegFileAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Notificações',
        path: '/notifications',
        icon: <FaIcons.FaExclamation/>,
        cName: 'nav-text'
    },
    {
        title: 'Gráficos de Evolução',
        path: '/graphics',
        icon: <FaIcons.FaSignal/>,
        cName: 'nav-text'
    },
    {
        title: 'Receitas',
        path: '/recipes',
        icon: <FaIcons.FaNotesMedical/>,
        cName: 'nav-text'
    },
    {
        title: 'Questionários',
        path: '/questionnaires',
        icon: <FaIcons.FaRegCopy/>,
        cName: 'nav-text'
    },
    {
        title: 'Equipe & Médicos',
        path: '/contacts',
        icon: <FaIcons.FaUserMd/>,
        cName: 'nav-text'
    },
    {
        title: 'Material Didático',
        path: '/library',
        icon: <FaIcons.FaBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Agendamentos',
        path: '/booking',
        icon: <FaIcons.FaRegCalendarAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Conquistas',
        path: '/achievements',
        icon: <FaIcons.FaTrophy/>,
        cName: 'nav-text'
    },
    {
        title: 'Dúvidas Frequentes',
        path: '/doubts',
        icon: <FaIcons.FaRegCommentDots/>,
        cName: 'nav-text'
    },
    {
        title: 'Meu Perfil',
        path: '/profile',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path: '/login',
        icon: <FaIcons.FaSignOutAlt/>,
        cName: 'nav-text'
    },
]
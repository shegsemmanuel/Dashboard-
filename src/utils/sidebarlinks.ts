interface Link {
  title: string
  icon: string
  link?:string
}

interface SideBarLink {
  title: string
  icon?: string
  type?: string
  link?:string
  content?: Link[]
}

export const sideBarLinks: SideBarLink[] = [
  {
    title: 'Get Started',
    icon: 'ri:global-line',
    link:"/"
  },
  {
    title: 'Dashboard',
    icon: 'humbleicons:dashboard',
   
  },
  {
    title: 'PAYMENTS',
    type: 'sub-headings',
    content: [
      {
        title: 'Transactions',
        icon: 'ph:swap-duotone',
       
      },
      {
        title: 'People',
        icon: 'ph:users-three-duotone',
        
      },
      {
        title: 'Settlements',
        icon: 'ph:chart-pie-slice-duotone',
        
      },
      {
        title: 'Payout',
        icon: 'ph:wallet-duotone',
        
      },
      {
        title: 'VNUBANs',
        icon: 'ph:desktop-tower-duotone',
      
      },
      {
        title: 'Subaccounts',
        icon: 'ph:bank-duotone',
      },
      {
        title: 'DD Mandates',
        icon: 'ph:wallet-duotone',
      }
    ]
  },
  {
    title: 'OTHERS',
    type: 'sub-headings',
    content: [
      {
        title: 'Audit Trails',
        icon: 'ph:scroll-duotone',
      },
      {
        title: 'Teams',
        icon: 'ph:users-duotone',
      },
      {
        title: 'Development',
        icon: 'iconoir:code',
      }
    ]
    }, 
  {
    title: 'Settings',
    icon: 'ph:gear-duotone',
  },
  {
    title: 'Log Out',
    icon: 'prime:sign-out'
  },
  
]

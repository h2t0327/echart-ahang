import asyncComponent from 'components/asyncComponent'
export const lineCharts =  asyncComponent(() => import('./lineChart'))

export const barCharts =  asyncComponent(() => import('./barChart'))

export const pieCharts =  asyncComponent(() => import('./pieChart'))
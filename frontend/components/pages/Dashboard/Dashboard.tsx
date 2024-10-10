import {
  DashboardCardList,
  HeaderContainer
} from "@/components/views"

export const DashboardContainer = () => {
  return (
    <div className="container mb-10 ">
      <HeaderContainer titlePage="Panel" />
      <DashboardCardList />
    </div>
  )
}

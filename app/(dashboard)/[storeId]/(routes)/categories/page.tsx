import prismadb from "@/lib/prismadb";

import { CategoriesClient } from "./components/client";
import { CategoryColumn } from "./components/columns";

import { dateFormatter } from "@/lib/utils";

const CategoriesPage = async ({
  params
}: {
  params: {
    storeId: string
  }
}) => {

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      billboard: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  // console.log(categories)

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: dateFormatter.format(item.createdAt) as string
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  )

  // return (
  //   <div></div>
  // )
}

export default CategoriesPage;
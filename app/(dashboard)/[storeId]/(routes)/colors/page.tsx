import prismadb from "@/lib/prismadb";

import { SizesClient } from "./components/client";
import { ColorColumn } from "./components/columns";

import { dateFormatter } from "@/lib/utils";

const SizesPage = async ({
  params
}: {
  params: {
    storeId: string
  }
}) => {

  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy:
    {
      createdAt: 'desc'
    }
  })

  const formattedSizes: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: dateFormatter.format(item.createdAt) as string
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  )

}

export default SizesPage;
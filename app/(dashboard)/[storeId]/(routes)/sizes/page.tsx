import prismadb from "@/lib/prismadb";

import { SizesClient } from "./components/client";
import { SizeColumn } from "./components/columns";

import { dateFormatter } from "@/lib/utils";

const SizesPage = async ({
  params
}: {
  params: {
    storeId: string
  }
}) => {

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy:
    {
      createdAt: 'desc'
    }
  })

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
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
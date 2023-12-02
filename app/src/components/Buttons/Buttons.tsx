import { deleteProduct } from "@/app/lib/actions";
import { TrashIcon } from "@heroicons/react/24/outline";

export function DeleteProduct({ id }: { id: string }) {
    const deleteProductWithId = deleteProduct.bind(null, id);
   
    return (
      <form action={deleteProductWithId}>
        <button className="rounded-md border p-2 ">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-4" />
        </button>
      </form>
    );
  }
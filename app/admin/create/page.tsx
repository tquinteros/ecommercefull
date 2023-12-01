import { fetchProducts } from '@/app/lib/data';
import Form from '@/app/src/components/Forms/CreateForm';
 
export default async function Page() {
  const products = await fetchProducts();
 
  return (
    <main>
      <Form products={products} />
    </main>
  );
}
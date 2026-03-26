import { Metadata } from 'next';
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react'; // 1. Import Suspense

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    // 2. Wrap the table in Suspense
    // This allows the static build to succeed by "deferring" the search param logic
    <Suspense fallback={<p>Loading customers...</p>}>
      <CustomersTable customers={customers} />
    </Suspense>
  );
}
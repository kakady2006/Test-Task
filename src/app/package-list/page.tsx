import { PackageListPage } from "@/views/package-list";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Список посылок",
  description: "Страница со списком всех добавленных посылок",
};

export default function Page() {
    return <PackageListPage />;
}

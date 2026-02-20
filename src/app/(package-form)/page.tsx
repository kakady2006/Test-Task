import { PackageCreatePage } from "@/views/package-create";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Добавление посылки",
  description: "Форма для добавления новой посылки в систему",
};

export default function Page() {
    return <PackageCreatePage />;
}

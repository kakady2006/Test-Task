import { PackageList } from "@/widgets/package-list/ui/PackageList";
export const PackageListPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white sm:bg-gray-100 sm:p-4">
      <PackageList />
    </main>
  );
};

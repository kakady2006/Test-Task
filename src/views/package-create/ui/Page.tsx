import { PackageCreateForm } from "@/widgets/package-create-form";

export const PackageCreatePage = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-white sm:bg-gray-100 sm:p-4">
      <PackageCreateForm />
    </main>
  );
};

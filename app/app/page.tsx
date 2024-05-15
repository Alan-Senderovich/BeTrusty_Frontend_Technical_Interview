import { ApartmentDetailView } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen md:px-6 lg:px-12" data-testid="main-container">
      <ApartmentDetailView />
    </main>
  );
}

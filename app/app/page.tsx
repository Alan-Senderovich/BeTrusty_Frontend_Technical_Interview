import { ApartmentDetailView } from "@/components";
// import ApartmentDetailView from "../components/ApartmentDetailView"

export default function Home() {
  return (
    <main className="md:px-6 lg:px-12 min-h-screen" data-testid="main-container">
      <ApartmentDetailView />
    </main>
  );
}

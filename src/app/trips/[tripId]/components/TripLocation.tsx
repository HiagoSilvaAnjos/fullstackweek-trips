import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="flxe flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Localização</h2>
      <div className="relative h-[280px] w-full">
        <Image
          src="/map-mobile.png"
          fill
          className="rounded-lg shadow-md"
          style={{
            objectFit: "cover",
          }}
          alt={location}
        />
      </div>

      <h3 className="text-primaryDarker text-sm font-semibold mt-3">
        {location}
      </h3>
      <p className="text-primaryDarker text-xs mt-3 leading-5">
        {locationDescription}
      </p>
      <Button variant={"outline"} className="mt-3 w-full">
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;

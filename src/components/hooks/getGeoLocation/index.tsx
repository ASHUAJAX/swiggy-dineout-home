import { useEffect } from 'react';

interface getGeoLocationHookProps {
  setData: any;
  setError: any;
}

const getGeoLocationHook = ({ setData, setError }: getGeoLocationHookProps) => {
  useEffect(() => {
    const fetchCity = async (lat: number, lng: number) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`
        );
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
          const addressComponents = data.results[0].address_components;

          const cityComponent = addressComponents.find((component: any) =>
            component.types.includes('locality')
          );

          const sublocalityComponent = addressComponents.find((component: any) =>
            component.types.includes('sublocality')
          );

          const cityName =
            (cityComponent && cityComponent.long_name) ||
            (sublocalityComponent && sublocalityComponent.long_name) ||
            'Unknown Location';

          setData((prev: any) => ({ ...prev, cityName }));
        } else {
          setError('Unable to fetch address.');
        }
      } catch (error: any) {
        setError('Error fetching address: ' + error.message);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setData((prev: any) => ({ ...prev, latitude, longitude }));
          fetchCity(latitude, longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, [setData, setError]); // Dependency array
};

export default getGeoLocationHook;

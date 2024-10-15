import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import SearchForm, {
	SearchFormValue,
} from "./components/SearchForm/SearchForm";
import config from "./config";

export interface Flight {
	time: string;
	destination: string;
	flight: string;
	gate: string;
	remarks: string;
}

function App() {
	const [flights, setFlights] = useState<Flight[]>([]);

	useEffect(() => {
		if (localStorage.getItem("flights")) {
			setFlights(JSON.parse(localStorage.getItem("flights") || ""));
		}
	}, []);

	const handleSubmitFlight = async (formValues: SearchFormValue) => {
		const response = await fetch(
			`https://api.aviationstack.com/v1/flights?access_key=${config.FLIGHTS_API_KEY}&flight_iata=${formValues.flightNumber}`
		);
		const parsedData = await response.json();

		const flightData = parsedData.data[0];
		if (flightData) {
			const date = new Date(flightData.departure.scheduled);
			const newFlight = {
				time: date.toLocaleTimeString(
					navigator.language || navigator.languages[0],
					{ hourCycle: "h23", hour: "2-digit", minute: "2-digit" }
				),
				destination: flightData.arrival.timezone
					.split("/")[2]
					.replaceAll("_", " "),
				flight: flightData.flight.iata,
				gate: flightData.departure.gate,
				remarks: flightData.flight_status,
			};

			const newFlightsList = [...flights, newFlight];
			localStorage.setItem("flights", JSON.stringify(newFlightsList));
			setFlights(newFlightsList);
		}
	};

	return (
		<>
			<div className="departures">
				<h1 className="text-3xl">DEPARTURES</h1>
				<SearchForm
					onSubmit={(formValues) => handleSubmitFlight(formValues)}
				/>
				<Board flights={flights} />
			</div>
		</>
	);
}

export default App;

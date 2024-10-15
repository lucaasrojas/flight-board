import { Flight } from "../../App";
import FlipperWord from "../FlipperWord/FlipperWord";

interface BoardProps {
	flights: Flight[];
}

const Board: React.FC<BoardProps> = ({ flights }) => {
	return (
		<>
			<div className="p-2 bg-gray-800" style={{ minWidth: 400 }}>
				<table
					className="table-auto"
					style={{
						borderCollapse: "separate",
						borderSpacing: "10px 5px",
					}}
				>
					<tr>
						<th>TIME</th>
						<th>DESTINATION</th>
						<th>FLIGHT</th>
						<th>GATE</th>
						<th>STATUS</th>
					</tr>
					{flights.map((flight, i) => (
						<tr key={i} style={{}}>
							<td>
								<FlipperWord text={flight.time} />
							</td>
							<td>
								<FlipperWord text={flight.destination} />
							</td>
							<td>
								<FlipperWord text={flight.flight} />
							</td>
							<td>
								<FlipperWord text={flight.gate} />
							</td>
							<td>
								<FlipperWord text={flight.remarks} />
							</td>
						</tr>
					))}
				</table>
			</div>
		</>
	);
};

export default Board;

const FlipperWord = ({ text }: { text: string }) => {
	return (
		<div className="flex" style={{ position: "relative" }}>
			{text && (
				<>
					<div style={{display: "flex", zIndex: 1, position: "absolute" }}> 
						{Array.from(text).map((letter, i) => (
							<div
								key={letter + i}
								className="flip text-3xl px-1"
								style={{
									border: "solid 4px rgb(26,26,26)",
									backgroundColor: "black",
									textAlign: "center",
									width: "3ch",
									height: 40,
									...({ "--i": i } as React.CSSProperties),
								}}
							>
								{letter}
							</div>
						))}
					</div>
					<div style={{ display: "flex"  }}>
						{Array.from(text).map((letter, i) => (
							<div
								key={letter + i}
								className=" text-3xl px-1"
								style={{
									border: "solid 4px rgb(26,26,26)",
									backgroundColor: "black",
									textAlign: "center",
									width: "3ch",
									height: 40,
								}}
							>
								{" "}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default FlipperWord;

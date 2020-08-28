import React, { useState, useCallback } from "react";
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  DiscreteColorLegend,
  VerticalBarSeries,
  Hint,
} from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";

import { Container, CustomHint } from "./styles";

import PropTypes from "prop-types";

function Chart({ reports }) {
  const goalData = reports.map((report) => ({
    x: `${report.month}/${report.year}`,
    y: report.goal,
  }));

  const productionData = reports.map((report) => ({
    x: `${report.month}/${report.year}`,
    y: report.produced,
  }));

  const [hint, setHint] = useState(null);

  const showHint = useCallback((value, label) => {
    setHint({ position: value, label, value: value.y + " kWh" });
  }, []);

  return (
    <Container>
      <FlexibleWidthXYPlot height={300} xType="ordinal">
        <DiscreteColorLegend
          orientation="horizontal"
          items={[
            {
              title: "Produção esperada",
              color: "#F2A378",
            },
            {
              title: "Produção real",
              color: "#138DD2",
            },
          ]}
        />

        <HorizontalGridLines />
        <YAxis title="Produção (kWh)" />
        <XAxis />

        <VerticalBarSeries
          onValueMouseOver={(value) => showHint(value, "Esperado")}
          onValueMouseOut={() => setHint(null)}
          barWidth={0.5}
          color="#F2A378"
          data={goalData}
        />
        <VerticalBarSeries
          barWidth={0.5}
          color="#138DD2"
          onValueMouseOver={(value) => showHint(value, "Produzido")}
          onValueMouseOut={() => setHint(null)}
          data={productionData}
        />

        {hint && (
          <Hint value={hint.position}>
            <CustomHint>{`${hint.label}: ${hint.value}`}</CustomHint>
          </Hint>
        )}
      </FlexibleWidthXYPlot>
    </Container>
  );
}

Chart.propTypes = {
  reports: PropTypes.array,
};

export default Chart;

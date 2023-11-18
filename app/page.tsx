"use client";
import { Card, Col, List, Row, Select, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
const { Title } = Typography;

export default function Home() {
  const [currentClass, setCurrentClass] = useState({
    class: "especial",
    colour: "green",
    items: [
      "ao abastecimento para consumo humano, com desinfecção;",
      "à preservação do equilíbrio natural das comunidades aquáticas; e",
      "à preservação dos ambientes aquáticos em unidades de conservação de proteção integral.",
    ],
  });
  const waterClasses = [
    {
      class: "especial",
      colour: "green",
      items: [
        "ao abastecimento para consumo humano, com desinfecção;",
        "à preservação do equilíbrio natural das comunidades aquáticas; e",
        "à preservação dos ambientes aquáticos em unidades de conservação de proteção integral.",
      ],
    },
    {
      class: "um",
      colour: "green",
      items: [
        "ao abastecimento para consumo humano, após tratamento simplificado;",
        "à proteção das comunidades aquáticas;",
        "à recreação de contato primário, tais como natação, esqui aquático e mergulho, conforme Resolução CONAMA n° 274, de 2000;",
        "à irrigação de hortaliças que são consumidas cruas e de frutas que se desenvolvam rentes ao solo e que sejam ingeridas cruas sem remoção de película; e",
        "à proteção das comunidades aquáticas em Terras Indígenas.",
      ],
    },
    {
      class: "dois",
      colour: "yellow",
      items: [
        "ao abastecimento para consumo humano, após tratamento convencional;",
        "à proteção das comunidades aquáticas; ",
        "à recreação de contato primário, tais como natação, esqui aquático e mergulho, conforme Resolução CONAMA n° 274, de 2000;",
        "à irrigação de hortaliças, plantas frutíferas e de parques, jardins, campos de esporte e lazer, com os quais o público possa vir a ter contato direto; e",
        "à aqüicultura e à atividade de pesca.",
      ],
    },
    {
      class: "três",
      colour: "yellow",
      items: [
        "ao abastecimento para consumo humano, após tratamento convencional ou avançado;",
        "à irrigação de culturas arbóreas, cerealíferas e forrageiras;",
        "à pesca amadora;",
        "à recreação de contato secundário; e",
        "à dessedentação de animais. ",
      ],
    },
    {
      class: "quatro",
      colour: "red",
      items: ["à navegação; e", "à harmonia paisagística."],
    },
  ];
  const handleChange = (value: string) => {
    const select: any = waterClasses.find((item) => {
      return item.class === value;
    });
    setCurrentClass(select);
    console.log(select);
  };
  return (
    <section className="">
      <Select
        defaultValue="especial"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "especial", label: "Especial" },
          { value: "um", label: "Classe 1" },
          { value: "dois", label: "Classe 2" },
          { value: "três", label: "Classe 3" },
          { value: "quatro", label: "Classe 4" },
        ]}
      />
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold pb-3">
          A água no seu reservatório está:{" "}
          <span className={`text-${currentClass.colour}-500`}>
            Classe {currentClass.class}
          </span>
        </h1>
        <List
          className="mb-6"
          header={
            <h3 className="font-bold text-lg">
              O que pode ser feito com essa água:
            </h3>
          }
          bordered
          dataSource={currentClass.items}
          renderItem={(item, index) => (
            <List.Item>
              <Typography.Text>{index + 1}.</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>

      <div className="flex flex-col gap-4 items-center w-full">
        <Col span={8} className="w-full">
          <Card title="pH" bordered={false}>
            Na água distribuída é de 6,0 a 9,0
          </Card>
        </Col>
        <Col span={8} className="w-full">
          <Card title="Salinidade" bordered={false}>
            O limite de 250 mg/l de cloreto foi fixado para o fornecimento de
            água potável, pois este é o nível a partir do qual a água passa a
            ter sabor salgado, quando o sódio é o cátion correspondente. Quando
            cálcio ou magnésio são os cátions correspondentes, um limite de até
            1000 mg/l pode ser tolerado sem gosto salgado.
          </Card>
        </Col>
        <Col span={8} className="w-full">
          <Card title="Oxigênio dissolvido" bordered={false}>
            O valor mínimo de oxigênio dissolvido (OD) para a preservação da
            vida aquática, estabelecido pela Resolução CONAMA 357/05(2) é de 5,0
            mg/L
          </Card>
        </Col>
        <Col span={8} className="w-full">
          <Card title="Temperatura" bordered={false}>
            Entre 25°C e 30°C
          </Card>
        </Col>
        <Col span={8} className="w-full">
          <Card title="TDS" bordered={false}>
            <div className="flex flex-col">
              <span>Excelente (Potável): {"<"}300 mg/l. </span>
              <span>Bom: 300-600 mg/l. </span>
              <span>Regular: 600-900 mg/l. </span>
            </div>
          </Card>
        </Col>

        {/* <Row gutter={16}>
          
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row> */}
        {/* <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row> */}
      </div>
      <div className=" pt-6 text-center">
        <h1 className="text-3xl font-bold pb-6">
          Contador de água reutilizada:
        </h1>
        <div className="w-full text-center pt-2">
          <span className="p-2 border-2 border-r border-solid border-black">
            3
          </span>
          <span className="p-2 border-2 border-r border-solid border-black">
            5
          </span>
          <span className="p-2 border-2 border-r border-solid border-black">
            3
          </span>
          <span className="p-2 border-2 border-r border-solid border-black">
            4
          </span>
          <span className="p-2 border-2 border-r border-solid border-black text-red-500">
            5
          </span>
          <span className="p-2 border-2 border-solid border-black text-red-500">
            5
          </span>
          <span className="pl-2">m³</span>
        </div>
      </div>
    </section>
  );
}

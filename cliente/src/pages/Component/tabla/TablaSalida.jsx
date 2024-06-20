import { Avatar, Badge, Button, Popover, Table, DatePicker  } from 'keep-react'
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline, Pencil, Trash, FileXls } from 'phosphor-react';
import { FechayHora } from "../DatePicker"
import {ExcelExporter} from "../botones/exportExelBoton"
import { useEffect,useState } from 'react';
import { Result } from 'postcss';

export const TablaSalida = ( data =[] ) => {
  const [dataArray,setData]= useState([])

useEffect (()=>{

  fetch('http://localhost:3000/salida', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response=> response.json())
            .then(result => {
              setData(result)
                console.log(result)
                
            })
            .catch(error =>{
                console.log(error)
            })
},[])

/*const DataArray = [
  {
    avatar: "/public/Cereza.svg",
    name: "Cereza",
    Calidad: "Grande",
    date: "Enero 9, 2024",
    time: "3:45 pm",
    amount: "KG: 85",
    
  },
  {
    avatar: "/public/mango.svg",
    name: "Mango",
    Calidad: "Premiun",
    date: "Diciembre 8, 2023",
    time: "4:45 pm",
    amount: "KG: 100",
  },
  {
    avatar: "/public/frutilla.svg",
    name: "Frutilla",
    Calidad: "Grande",
    date: "Enero 15, 2024",
    time: "3:45 pm",
    amount: "KG: 90",
    
  },
  {
    avatar: "/public/Frambuesa.svg",
    name: "Frambuesa",
    Calidad: "Premium",
    date: "Enero 5, 2024",
    time: "3:45 pm",
    amount: "KG: 55",
    
  },
  
];*/


  return (
    <Table showCheckbox={true}>
      {/* ... Resto del código ... */}
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Salida</p>
          </div>
          <div className="flex items-center gap-5">
            {/*aqui va el boton*/}
            <ExcelExporter data={dataArray} fileName="table_data"/>
            {/*aqui termina el espacio boton */}
           <FechayHora></FechayHora>
          </div>
        </div>
      </Table.Caption>
      <Table.Body className="divide-gray-25 divide-y">
        {dataArray.map((item, index) => (
          <Table.Row className="bg-white" key={index}>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img={item.avatar} size="md" />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{item.nombre}</p>
                      <span className="text-body-6 font-normal text-metal-500">{item.calidad}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">{item.fecha_date}</p>
              <p className="text-body-6 font-normal text-metal-500">{item.fecha_time} hs</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">kg: {item.peso}</p>
            </Table.Cell>
            
          <Table.Cell>
            <div className="inline-block">
              <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                Delivered
              </Badge>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Calidad</p>
            <p className="text-body-6 font-normal text-metal-500">Premiun</p>
          </Table.Cell>
          <Table.Cell>
            <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
              <Popover.Container className="!mt-0 !block">
                <ul>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Delete</span>
                      <span>
                        <Trash />
                      </span>
                    </button>
                  </li>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Edit</span>
                      <span>
                        <Pencil />
                      </span>
                    </button>
                  </li>
                </ul>
              </Popover.Container>
              <Popover.Action>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover.Action>
            </Popover>
          </Table.Cell>
            {/* ... Resto de las celdas ... */}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};


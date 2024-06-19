'use client'
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import {Flex, SimpleGrid, Box, Text, theme} from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'

import dynamic from "next/dynamic"
 
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
    chart: {
       toolbar: {
        show: false
       },
       zoom: {
        enabled: false
       },
       foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
           '2024-06-21T00:00:00.000Z',
           '2024-06-22T00:00:00.000Z',
           '2024-06-23T00:00:00.000Z',
           '2024-06-24T00:00:00.000Z',
           '2024-06-25T00:00:00.000Z',
           '2024-06-26T00:00:00.000Z',
           '2024-06-27T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}
const series = [
    {
        name: 'series1',
        data: [10,30,32,21,32,70,48]
    }
]

export default function Dashboard () {
    return (
        <Flex direction="column" h="100vh">
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar/>
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignContent="flex-start">
                    <Box
                    p={["6","8"]}
                    bg="gray.800"
                    borderRadius={8}
                    pb="4"
                    >
                        <Text
                        fontSize="lg"
                        mb="4"
                        >
                            Inscritos da semana
                        </Text>
                        <Chart options={options} series={series} type="area" height={160}  width="100%"/>
                    </Box>
                    <Box
                    p={["6","8"]}
                    bg="gray.800"
                    borderRadius={8}
                    pb="4"
                    >
                        <Text
                        fontSize="lg"
                        mb="4"
                        >
                            Taxa de abertura
                        </Text>
                        <Chart options={options} series={series} type="area" height={160}  width="100%"/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}


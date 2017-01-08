import { renderComponent, expect } from '../test_helper'
import Accounts from '../../src/components/pages/Accounts'
import { Card, CardTitle, CardText, Icon, List, ListItem, ListItemContent, ListItemAction } from 'react-mdl';

describe('display accounts page', () => {

    let accountPage: any;

    const accounts = {accounts: [
        {
            "id": "afd277ef-f186-4a1c-9688-12768eaeb66f",
            "type": "Savings Account",
            "description": "Flexible savings account",
            "createdAt": "Wed, 14 Dec 2016 04:11:52 GMT",
            "updatedAt": null,
            "owner": {
                "id": "81763a81-71c9-4dcb-aa94-3fb433586076",
                "createdAt": "Wed, 14 Dec 2016 04:11:52 GMT",
                "updatedAt": null,
                "email": "Richard Stallman",
                "name": "Richard Stallman"
            },
            "balance": 374.09,
            "transactions": [
                {
                    "id": "71b3d5de-c3b5-4c9d-b8b4-d3d87a57e390",
                    "type": "debit",
                    "timestamp": "2016-12-13T15:07:58.595Z",
                    "currency": "AUD",
                    "amount": 33.57,
                    "balanceBefore": 407.66,
                    "balanceAfter": 374.09
                },
                {
                    "id": "5e05b75d-1436-40bd-b995-ff19d7a08c85",
                    "type": "debit",
                    "timestamp": "2016-12-12T10:28:30.424Z",
                    "currency": "AUD",
                    "amount": 14.83,
                    "balanceBefore": 422.49,
                    "balanceAfter": 407.66
                },
                {
                    "id": "e27370db-a839-4daf-a932-228fb5409d32",
                    "type": "debit",
                    "timestamp": "2016-12-11T08:36:39.663Z",
                    "currency": "AUD",
                    "amount": 8.32,
                    "balanceBefore": 430.81,
                    "balanceAfter": 422.49
                },
                {
                    "id": "de260425-7cbd-4440-a943-192ae8780413",
                    "type": "debit",
                    "timestamp": "2016-12-09T19:42:31.745Z",
                    "currency": "AUD",
                    "amount": 25.05,
                    "balanceBefore": 455.86,
                    "balanceAfter": 430.81
                },
                {
                    "id": "412a5966-57e7-4f07-82bb-22cd5e7395df",
                    "type": "debit",
                    "timestamp": "2016-12-09T14:17:52.402Z",
                    "currency": "AUD",
                    "amount": 10.18,
                    "balanceBefore": 466.04,
                    "balanceAfter": 455.86
                },
                {
                    "id": "501add32-9076-49e8-9907-6ef73b2194a6",
                    "type": "debit",
                    "timestamp": "2016-12-08T11:51:03.475Z",
                    "currency": "AUD",
                    "amount": 39.97,
                    "balanceBefore": 506.01,
                    "balanceAfter": 466.04
                },
                {
                    "id": "9d346af4-cf15-4ceb-b44f-0e1d6e5770b1",
                    "type": "debit",
                    "timestamp": "2016-12-07T07:02:34.983Z",
                    "currency": "AUD",
                    "amount": 10.65,
                    "balanceBefore": 516.66,
                    "balanceAfter": 506.01
                },
                {
                    "id": "81b324d0-3b46-4e37-9bdd-4d272a6e77b2",
                    "type": "credit",
                    "timestamp": "2016-12-06T12:34:14.820Z",
                    "currency": "AUD",
                    "amount": 25.02,
                    "balanceBefore": 491.64,
                    "balanceAfter": 516.66
                },
                {
                    "id": "8824e3ab-c253-42dd-900b-96f95507208c",
                    "type": "credit",
                    "timestamp": "2016-12-05T07:09:40.409Z",
                    "currency": "AUD",
                    "amount": 38.92,
                    "balanceBefore": 452.72,
                    "balanceAfter": 491.64
                },
                {
                    "id": "55bd4810-49ee-4058-8128-94f16fc7c919",
                    "type": "credit",
                    "timestamp": "2016-12-04T09:43:09.481Z",
                    "currency": "AUD",
                    "amount": 55.72,
                    "balanceBefore": 397,
                    "balanceAfter": 452.72
                },
                {
                    "id": "6faf5552-6701-43dd-8dbd-6d078509b21c",
                    "type": "credit",
                    "timestamp": "2016-12-03T14:44:21.826Z",
                    "currency": "AUD",
                    "amount": 33.74,
                    "balanceBefore": 363.26,
                    "balanceAfter": 397
                },
                {
                    "id": "1e26c788-7a96-4c93-bf82-bdffe7932b2e",
                    "type": "debit",
                    "timestamp": "2016-12-02T12:31:35.531Z",
                    "currency": "AUD",
                    "amount": 30.42,
                    "balanceBefore": 393.68,
                    "balanceAfter": 363.26
                },
                {
                    "id": "68298004-114e-485d-8f7b-9ca3afdbe5ef",
                    "type": "debit",
                    "timestamp": "2016-12-01T15:45:02.053Z",
                    "currency": "AUD",
                    "amount": 49.26,
                    "balanceBefore": 442.94,
                    "balanceAfter": 393.68
                },
                {
                    "id": "75d1f812-d468-4efa-8b47-8557c12662f7",
                    "type": "credit",
                    "timestamp": "2016-11-30T06:40:19.655Z",
                    "currency": "AUD",
                    "amount": 20.59,
                    "balanceBefore": 422.35,
                    "balanceAfter": 442.94
                },
                {
                    "id": "48cc8a53-39ff-41a7-a007-0c333d1bcf56",
                    "type": "credit",
                    "timestamp": "2016-11-29T07:59:44.322Z",
                    "currency": "AUD",
                    "amount": 2.63,
                    "balanceBefore": 419.72,
                    "balanceAfter": 422.35
                },
                {
                    "id": "ee6515d4-bccb-43a6-bce6-aee885478826",
                    "type": "debit",
                    "timestamp": "2016-11-28T01:04:10.352Z",
                    "currency": "AUD",
                    "amount": 14.5,
                    "balanceBefore": 434.22,
                    "balanceAfter": 419.72
                },
                {
                    "id": "fb93ea7b-eca5-4c68-8d5f-12860d954fec",
                    "type": "credit",
                    "timestamp": "2016-11-27T10:38:18.059Z",
                    "currency": "AUD",
                    "amount": 31.43,
                    "balanceBefore": 402.79,
                    "balanceAfter": 434.22
                },
                {
                    "id": "676bc0f9-507b-4525-94db-39b185b44d18",
                    "type": "credit",
                    "timestamp": "2016-11-25T23:16:35.493Z",
                    "currency": "AUD",
                    "amount": 10.63,
                    "balanceBefore": 392.16,
                    "balanceAfter": 402.79
                },
                {
                    "id": "3ccbd35a-ebe5-4313-b06c-309f61fdb69a",
                    "type": "credit",
                    "timestamp": "2016-11-25T14:57:09.060Z",
                    "currency": "AUD",
                    "amount": 55.09,
                    "balanceBefore": 337.07,
                    "balanceAfter": 392.16
                },
                {
                    "id": "2112c6ea-ea63-4d4d-89dd-385d8b077708",
                    "type": "credit",
                    "timestamp": "2016-11-24T01:59:31.995Z",
                    "currency": "AUD",
                    "amount": 68.66,
                    "balanceBefore": 268.41,
                    "balanceAfter": 337.07
                },
                {
                    "id": "cc5c2eeb-8f92-40e7-8d36-af9440c1d4a2",
                    "type": "credit",
                    "timestamp": "2016-11-23T01:32:28.700Z",
                    "currency": "AUD",
                    "amount": 19.26,
                    "balanceBefore": 249.15,
                    "balanceAfter": 268.41
                },
                {
                    "id": "90e0408e-2573-4bb5-b976-07e2a88f1572",
                    "type": "debit",
                    "timestamp": "2016-11-21T23:39:39.667Z",
                    "currency": "AUD",
                    "amount": 2.72,
                    "balanceBefore": 251.87,
                    "balanceAfter": 249.15
                },
                {
                    "id": "dc4667e0-0aa9-43cc-a621-8e1f72d05679",
                    "type": "debit",
                    "timestamp": "2016-11-21T15:51:07.875Z",
                    "currency": "AUD",
                    "amount": 36.83,
                    "balanceBefore": 288.7,
                    "balanceAfter": 251.87
                },
                {
                    "id": "f08d7b13-6c30-4db9-b243-1fa0d2a0206b",
                    "type": "debit",
                    "timestamp": "2016-11-20T05:06:48.836Z",
                    "currency": "AUD",
                    "amount": 43.36,
                    "balanceBefore": 332.06,
                    "balanceAfter": 288.7
                },
                {
                    "id": "a1d7711f-03b5-4ccf-9c18-86ebe88160c1",
                    "type": "credit",
                    "timestamp": "2016-11-19T12:09:06.094Z",
                    "currency": "AUD",
                    "amount": 14.54,
                    "balanceBefore": 317.52,
                    "balanceAfter": 332.06
                },
                {
                    "id": "7c9eb948-b4a1-4cd2-97d5-e659e87f2800",
                    "type": "credit",
                    "timestamp": "2016-11-18T13:15:20.919Z",
                    "currency": "AUD",
                    "amount": 19.36,
                    "balanceBefore": 298.16,
                    "balanceAfter": 317.52
                },
                {
                    "id": "c96df3d4-8278-443f-bf69-94c92d54bc1a",
                    "type": "debit",
                    "timestamp": "2016-11-16T22:24:59.549Z",
                    "currency": "AUD",
                    "amount": 46.41,
                    "balanceBefore": 344.57,
                    "balanceAfter": 298.16
                },
                {
                    "id": "2da76666-7444-4a48-b92d-528002be49f6",
                    "type": "debit",
                    "timestamp": "2016-11-16T07:49:46.549Z",
                    "currency": "AUD",
                    "amount": 30.63,
                    "balanceBefore": 375.2,
                    "balanceAfter": 344.57
                },
                {
                    "id": "3e431dd4-cf79-4dab-bb12-36eb383e12c4",
                    "type": "debit",
                    "timestamp": "2016-11-14T18:54:16.867Z",
                    "currency": "AUD",
                    "amount": 8.33,
                    "balanceBefore": 383.53,
                    "balanceAfter": 375.2
                },
                {
                    "id": "0d2d6a1f-e051-404f-b524-99428681c575",
                    "type": "credit",
                    "timestamp": "2016-11-14T06:31:00.625Z",
                    "currency": "AUD",
                    "amount": 49.55,
                    "balanceBefore": 333.98,
                    "balanceAfter": 383.53
                },
                {
                    "id": "76bc005a-29e8-4ff5-a1b9-6d4cea4613e4",
                    "type": "debit",
                    "timestamp": "2016-11-13T02:21:32.807Z",
                    "currency": "AUD",
                    "amount": 34.05,
                    "balanceBefore": 368.03,
                    "balanceAfter": 333.98
                },
                {
                    "id": "d5883deb-399f-45b1-b916-851047145297",
                    "type": "credit",
                    "timestamp": "2016-11-12T02:36:44.920Z",
                    "currency": "AUD",
                    "amount": 7.44,
                    "balanceBefore": 360.59,
                    "balanceAfter": 368.03
                },
                {
                    "id": "7d881709-6b03-4db3-a31e-1eda2d3d8c32",
                    "type": "debit",
                    "timestamp": "2016-11-11T07:38:57.281Z",
                    "currency": "AUD",
                    "amount": 22.93,
                    "balanceBefore": 383.52,
                    "balanceAfter": 360.59
                },
                {
                    "id": "d4d4e20b-7ddf-4158-acc1-cfb1fe71f2ef",
                    "type": "debit",
                    "timestamp": "2016-11-10T13:48:56.719Z",
                    "currency": "AUD",
                    "amount": 32.42,
                    "balanceBefore": 415.94,
                    "balanceAfter": 383.52
                },
                {
                    "id": "2eaa5eed-b8ad-42bf-9e82-9bed499d2f23",
                    "type": "credit",
                    "timestamp": "2016-11-09T05:58:13.579Z",
                    "currency": "AUD",
                    "amount": 11.75,
                    "balanceBefore": 404.19,
                    "balanceAfter": 415.94
                },
                {
                    "id": "9450429a-2da4-4d0e-9568-682b3565565e",
                    "type": "debit",
                    "timestamp": "2016-11-08T10:55:06.604Z",
                    "currency": "AUD",
                    "amount": 36.74,
                    "balanceBefore": 440.93,
                    "balanceAfter": 404.19
                },
                {
                    "id": "a148c47d-7b4f-419f-8e9d-e6d3b79924b8",
                    "type": "debit",
                    "timestamp": "2016-11-07T02:51:17.489Z",
                    "currency": "AUD",
                    "amount": 37.53,
                    "balanceBefore": 478.46,
                    "balanceAfter": 440.93
                },
                {
                    "id": "caaa2c88-2830-4e94-bdfb-108590e6ecbd",
                    "type": "debit",
                    "timestamp": "2016-11-05T16:58:20.709Z",
                    "currency": "AUD",
                    "amount": 15.97,
                    "balanceBefore": 494.43,
                    "balanceAfter": 478.46
                },
                {
                    "id": "b9af199d-f919-452c-a36d-b2afeac50703",
                    "type": "credit",
                    "timestamp": "2016-11-05T09:26:27.870Z",
                    "currency": "AUD",
                    "amount": 9.56,
                    "balanceBefore": 484.87,
                    "balanceAfter": 494.43
                },
                {
                    "id": "f7fb069e-5f6e-4060-8e80-760534001ed5",
                    "type": "credit",
                    "timestamp": "2016-11-03T17:34:20.782Z",
                    "currency": "AUD",
                    "amount": 60.41,
                    "balanceBefore": 424.46,
                    "balanceAfter": 484.87
                },
                {
                    "id": "ac7dd6c4-6d7f-4b51-8fb8-0db8dbc3ac62",
                    "type": "debit",
                    "timestamp": "2016-11-03T10:43:16.149Z",
                    "currency": "AUD",
                    "amount": 30.43,
                    "balanceBefore": 454.89,
                    "balanceAfter": 424.46
                },
                {
                    "id": "5d5739f9-4519-4269-83a8-fec182f63838",
                    "type": "debit",
                    "timestamp": "2016-11-02T00:15:46.865Z",
                    "currency": "AUD",
                    "amount": 1.43,
                    "balanceBefore": 456.32,
                    "balanceAfter": 454.89
                },
                {
                    "id": "8fc5afb3-67d6-4193-8e77-5226f4fbee7f",
                    "type": "debit",
                    "timestamp": "2016-11-01T05:25:39.009Z",
                    "currency": "AUD",
                    "amount": 4.47,
                    "balanceBefore": 460.79,
                    "balanceAfter": 456.32
                },
                {
                    "id": "6d843e9b-8ea1-4d7c-b17f-119f40f7154c",
                    "type": "debit",
                    "timestamp": "2016-10-30T19:15:12.686Z",
                    "currency": "AUD",
                    "amount": 43.21,
                    "balanceBefore": 504,
                    "balanceAfter": 460.79
                },
                {
                    "id": "448a62ff-c9a1-42c9-b7fa-29a61b9bca02",
                    "type": "debit",
                    "timestamp": "2016-10-30T12:08:26.087Z",
                    "currency": "AUD",
                    "amount": 11.93,
                    "balanceBefore": 515.93,
                    "balanceAfter": 504
                },
                {
                    "id": "dd16b4cb-3ec4-4508-8ed2-c52e5d6a40e8",
                    "type": "credit",
                    "timestamp": "2016-10-29T10:27:16.887Z",
                    "currency": "AUD",
                    "amount": 51.7,
                    "balanceBefore": 464.23,
                    "balanceAfter": 515.93
                },
                {
                    "id": "68d63bda-6603-4bbe-9f13-da407ec01d53",
                    "type": "credit",
                    "timestamp": "2016-10-28T08:57:42.397Z",
                    "currency": "AUD",
                    "amount": 62.84,
                    "balanceBefore": 401.39,
                    "balanceAfter": 464.23
                },
                {
                    "id": "665c4dfb-b739-4682-bcec-d53abdb3f344",
                    "type": "credit",
                    "timestamp": "2016-10-27T13:38:36.905Z",
                    "currency": "AUD",
                    "amount": 48.45,
                    "balanceBefore": 352.94,
                    "balanceAfter": 401.39
                },
                {
                    "id": "a7640055-fc17-4c31-8e28-2f51011bbe98",
                    "type": "credit",
                    "timestamp": "2016-10-26T15:20:31.128Z",
                    "currency": "AUD",
                    "amount": 67.49,
                    "balanceBefore": 285.45,
                    "balanceAfter": 352.94
                },
                {
                    "id": "bf4d04af-8ab1-446c-9844-4b4c2452e25c",
                    "type": "debit",
                    "timestamp": "2016-10-25T14:32:38.436Z",
                    "currency": "AUD",
                    "amount": 29.09,
                    "balanceBefore": 314.54,
                    "balanceAfter": 285.45
                },
                {
                    "id": "385cf4ed-be6e-4858-b1d0-5bcf9064f92f",
                    "type": "debit",
                    "timestamp": "2016-10-24T10:36:58.068Z",
                    "currency": "AUD",
                    "amount": 8.85,
                    "balanceBefore": 323.39,
                    "balanceAfter": 314.54
                },
                {
                    "id": "71b48828-f258-457b-8175-27faa88d83e3",
                    "type": "debit",
                    "timestamp": "2016-10-22T23:26:16.899Z",
                    "currency": "AUD",
                    "amount": 41.03,
                    "balanceBefore": 364.42,
                    "balanceAfter": 323.39
                },
                {
                    "id": "7d5c61ff-67d9-45e7-8941-77e03be3ee83",
                    "type": "credit",
                    "timestamp": "2016-10-22T04:13:16.734Z",
                    "currency": "AUD",
                    "amount": 63.81,
                    "balanceBefore": 300.61,
                    "balanceAfter": 364.42
                },
                {
                    "id": "17a79d19-f23f-40eb-b642-facf5af21771",
                    "type": "credit",
                    "timestamp": "2016-10-20T20:41:37.621Z",
                    "currency": "AUD",
                    "amount": 12.93,
                    "balanceBefore": 287.68,
                    "balanceAfter": 300.61
                },
                {
                    "id": "76e3bcba-aa5c-4559-8c39-86ea707686b2",
                    "type": "credit",
                    "timestamp": "2016-10-20T12:57:21.571Z",
                    "currency": "AUD",
                    "amount": 51.39,
                    "balanceBefore": 236.29,
                    "balanceAfter": 287.68
                },
                {
                    "id": "edf6d22b-0f9e-4870-90a7-db55bcf41547",
                    "type": "credit",
                    "timestamp": "2016-10-19T01:57:06.768Z",
                    "currency": "AUD",
                    "amount": 67.94,
                    "balanceBefore": 168.35,
                    "balanceAfter": 236.29
                },
                {
                    "id": "f8f6d374-55ae-482b-9313-221654b5997b",
                    "type": "credit",
                    "timestamp": "2016-10-18T06:09:26.531Z",
                    "currency": "AUD",
                    "amount": 21.6,
                    "balanceBefore": 146.75,
                    "balanceAfter": 168.35
                },
                {
                    "id": "fe02874f-c662-46a7-9b97-4797b8452101",
                    "type": "debit",
                    "timestamp": "2016-10-17T12:20:47.638Z",
                    "currency": "AUD",
                    "amount": 23.83,
                    "balanceBefore": 170.58,
                    "balanceAfter": 146.75
                },
                {
                    "id": "aa20e983-6464-484d-a650-dc97f67773f7",
                    "type": "credit",
                    "timestamp": "2016-10-16T05:42:28.637Z",
                    "currency": "AUD",
                    "amount": 49.13,
                    "balanceBefore": 121.45,
                    "balanceAfter": 170.58
                },
                {
                    "id": "da0de464-6e43-4f76-92d5-4b864ae13693",
                    "type": "credit",
                    "timestamp": "2016-10-15T05:57:38.455Z",
                    "currency": "AUD",
                    "amount": 7.76,
                    "balanceBefore": 113.69,
                    "balanceAfter": 121.45
                },
                {
                    "id": "f1f6cec2-fd94-4f39-9036-579627ff51aa",
                    "type": "debit",
                    "timestamp": "2016-10-14T03:13:06.272Z",
                    "currency": "AUD",
                    "amount": 3.73,
                    "balanceBefore": 117.42,
                    "balanceAfter": 113.69
                },
                {
                    "id": "098a8776-8b1e-4304-b698-157d416014fa",
                    "type": "debit",
                    "timestamp": "2016-10-13T13:42:47.666Z",
                    "currency": "AUD",
                    "amount": 45.05,
                    "balanceBefore": 162.47,
                    "balanceAfter": 117.42
                },
                {
                    "id": "2752fec9-9a7a-4a89-82f0-b306bff4afc8",
                    "type": "credit",
                    "timestamp": "2016-10-12T05:52:08.653Z",
                    "currency": "AUD",
                    "amount": 52.08,
                    "balanceBefore": 110.39,
                    "balanceAfter": 162.47
                },
                {
                    "id": "d547a2a0-c797-40d0-85e0-9c3c38ae5dd8",
                    "type": "credit",
                    "timestamp": "2016-10-11T15:21:56.210Z",
                    "currency": "AUD",
                    "amount": 57.68,
                    "balanceBefore": 52.71,
                    "balanceAfter": 110.39
                },
                {
                    "id": "67d13280-42a7-42dd-bd13-ea2e8a8e8672",
                    "type": "debit",
                    "timestamp": "2016-10-09T17:25:20.946Z",
                    "currency": "AUD",
                    "amount": 45.86,
                    "balanceBefore": 98.57,
                    "balanceAfter": 52.71
                },
                {
                    "id": "78d148b2-81bc-44a2-a5eb-08fced645955",
                    "type": "credit",
                    "timestamp": "2016-10-08T17:11:46.233Z",
                    "currency": "AUD",
                    "amount": 71.94,
                    "balanceBefore": 26.63,
                    "balanceAfter": 98.57
                },
                {
                    "id": "c53e600b-fe0d-4c7a-8f23-2506ad6ab094",
                    "type": "credit",
                    "timestamp": "2016-10-08T01:39:37.879Z",
                    "currency": "AUD",
                    "amount": 34.34,
                    "balanceBefore": -7.71,
                    "balanceAfter": 26.63
                },
                {
                    "id": "7d16ccc3-8493-4f08-96e6-5227dc5dd163",
                    "type": "credit",
                    "timestamp": "2016-10-06T18:40:41.554Z",
                    "currency": "AUD",
                    "amount": 8.9,
                    "balanceBefore": -16.61,
                    "balanceAfter": -7.71
                },
                {
                    "id": "fc429f16-df07-4b61-a500-1ab81137f121",
                    "type": "debit",
                    "timestamp": "2016-10-06T12:32:13.247Z",
                    "currency": "AUD",
                    "amount": 16.27,
                    "balanceBefore": -0.34,
                    "balanceAfter": -16.61
                },
                {
                    "id": "0408193c-aaaf-4c01-a96e-669895c98dec",
                    "type": "debit",
                    "timestamp": "2016-10-05T10:10:57.141Z",
                    "currency": "AUD",
                    "amount": 39.23,
                    "balanceBefore": 38.89,
                    "balanceAfter": -0.34
                },
                {
                    "id": "7116e7ef-c175-4da9-86b2-1cb2fd344bbe",
                    "type": "credit",
                    "timestamp": "2016-10-03T18:49:19.825Z",
                    "currency": "AUD",
                    "amount": 38.89,
                    "balanceBefore": 0,
                    "balanceAfter": 38.89
                },
                {
                    "id": "32576115-f12d-44fd-b51a-b63847f35ff4",
                    "type": "credit",
                    "timestamp": "2016-10-02T19:53:57.507Z",
                    "currency": "AUD",
                    "amount": 0,
                    "balanceBefore": 0,
                    "balanceAfter": 0
                }
            ]
        },
        {
            "id": "03f297c7-2a93-4995-95db-e5aa9103b7ce",
            "type": "Smart Access Account",
            "description": "Low fee account for flexible access",
            "icon": "credit_card",
            "createdAt": "Wed, 14 Dec 2016 04:11:52 GMT",
            "updatedAt": null,
            "owner": {
                "id": "81763a81-71c9-4dcb-aa94-3fb433586076",
                "createdAt": "Wed, 14 Dec 2016 04:11:52 GMT",
                "updatedAt": null,
                "email": "Richard Stallman",
                "name": "Richard Stallman"
            },
            "balance": 125.16,
            "transactions": [
                {
                    "id": "545d8601-26ae-4f67-bc94-ee056a3f56ef",
                    "type": "debit",
                    "timestamp": "2016-12-13T12:40:38.246Z",
                    "currency": "AUD",
                    "amount": 32.04,
                    "balanceBefore": 157.2,
                    "balanceAfter": 125.16
                },
                {
                    "id": "10213492-70c2-4c78-b5cf-83db6935f489",
                    "type": "debit",
                    "timestamp": "2016-12-12T08:23:06.137Z",
                    "currency": "AUD",
                    "amount": 6.77,
                    "balanceBefore": 163.97,
                    "balanceAfter": 157.2
                },
                {
                    "id": "d53e4141-b45f-4c15-bb98-02ec6620ac26",
                    "type": "credit",
                    "timestamp": "2016-12-11T01:35:02.906Z",
                    "currency": "AUD",
                    "amount": 57.63,
                    "balanceBefore": 106.34,
                    "balanceAfter": 163.97
                },
                {
                    "id": "349e1d50-9323-4ae8-8f89-bc40145ce43a",
                    "type": "debit",
                    "timestamp": "2016-12-10T00:09:42.378Z",
                    "currency": "AUD",
                    "amount": 37.82,
                    "balanceBefore": 144.16,
                    "balanceAfter": 106.34
                },
                {
                    "id": "455f941f-2f53-4121-992f-0f8b52891ce1",
                    "type": "debit",
                    "timestamp": "2016-12-09T08:47:30.177Z",
                    "currency": "AUD",
                    "amount": 19.59,
                    "balanceBefore": 163.75,
                    "balanceAfter": 144.16
                },
                {
                    "id": "f8a2d9e5-e9d7-4cf9-bef5-6d2536645f83",
                    "type": "debit",
                    "timestamp": "2016-12-08T06:59:51.337Z",
                    "currency": "AUD",
                    "amount": 20,
                    "balanceBefore": 183.75,
                    "balanceAfter": 163.75
                },
                {
                    "id": "9876d956-11af-444e-a5c7-63e04a09d919",
                    "type": "debit",
                    "timestamp": "2016-12-07T00:38:48.454Z",
                    "currency": "AUD",
                    "amount": 24.93,
                    "balanceBefore": 208.68,
                    "balanceAfter": 183.75
                },
                {
                    "id": "c4b4619b-b591-4ba3-b662-909e28105499",
                    "type": "credit",
                    "timestamp": "2016-12-06T05:00:49.742Z",
                    "currency": "AUD",
                    "amount": 53.61,
                    "balanceBefore": 155.07,
                    "balanceAfter": 208.68
                },
                {
                    "id": "418c1502-be0f-4474-ba5b-c2d910208fc7",
                    "type": "credit",
                    "timestamp": "2016-12-04T19:19:15.063Z",
                    "currency": "AUD",
                    "amount": 65.25,
                    "balanceBefore": 89.82,
                    "balanceAfter": 155.07
                },
                {
                    "id": "3550d149-9fe0-43aa-92cc-a01d2eebcbf3",
                    "type": "debit",
                    "timestamp": "2016-12-03T18:04:08.911Z",
                    "currency": "AUD",
                    "amount": 24.46,
                    "balanceBefore": 114.28,
                    "balanceAfter": 89.82
                },
                {
                    "id": "88320460-cab2-4c9d-8141-27cb49b9645a",
                    "type": "credit",
                    "timestamp": "2016-12-02T20:22:04.365Z",
                    "currency": "AUD",
                    "amount": 74.17,
                    "balanceBefore": 40.11,
                    "balanceAfter": 114.28
                },
                {
                    "id": "4b8c75dd-0944-4ee7-bc4a-38fa7b198754",
                    "type": "debit",
                    "timestamp": "2016-12-01T20:09:00.377Z",
                    "currency": "AUD",
                    "amount": 3.26,
                    "balanceBefore": 43.37,
                    "balanceAfter": 40.11
                },
                {
                    "id": "572c7c9a-5668-4361-92aa-46e73c0ecde9",
                    "type": "credit",
                    "timestamp": "2016-11-30T21:03:13.835Z",
                    "currency": "AUD",
                    "amount": 49.18,
                    "balanceBefore": -5.81,
                    "balanceAfter": 43.37
                },
                {
                    "id": "bbe782eb-a0e1-4e63-8aa4-7c5b3e101409",
                    "type": "debit",
                    "timestamp": "2016-11-30T04:40:15.457Z",
                    "currency": "AUD",
                    "amount": 11.9,
                    "balanceBefore": 6.09,
                    "balanceAfter": -5.81
                },
                {
                    "id": "01deb5d5-8779-425f-8134-d359e92f95e9",
                    "type": "debit",
                    "timestamp": "2016-11-29T00:15:05.930Z",
                    "currency": "AUD",
                    "amount": 37.79,
                    "balanceBefore": 43.88,
                    "balanceAfter": 6.09
                },
                {
                    "id": "d88e9faf-ac7b-435f-b1cc-a3f1716578fc",
                    "type": "credit",
                    "timestamp": "2016-11-27T23:06:25.547Z",
                    "currency": "AUD",
                    "amount": 46.76,
                    "balanceBefore": -2.88,
                    "balanceAfter": 43.88
                },
                {
                    "id": "faf0e41a-b20a-4021-bd54-78fdcc69cdf4",
                    "type": "credit",
                    "timestamp": "2016-11-27T03:06:07.836Z",
                    "currency": "AUD",
                    "amount": 12.14,
                    "balanceBefore": -15.02,
                    "balanceAfter": -2.88
                },
                {
                    "id": "48485fe8-5595-40c7-afdb-154826bb6a4f",
                    "type": "credit",
                    "timestamp": "2016-11-25T21:28:49.826Z",
                    "currency": "AUD",
                    "amount": 61.51,
                    "balanceBefore": -76.53,
                    "balanceAfter": -15.02
                },
                {
                    "id": "f754719a-4d2e-4b98-97cf-ce6795adea01",
                    "type": "debit",
                    "timestamp": "2016-11-25T04:23:03.076Z",
                    "currency": "AUD",
                    "amount": 21.62,
                    "balanceBefore": -54.91,
                    "balanceAfter": -76.53
                },
                {
                    "id": "84e02a3e-4557-4e6e-a9a5-bbc2e136067e",
                    "type": "debit",
                    "timestamp": "2016-11-24T01:05:06.635Z",
                    "currency": "AUD",
                    "amount": 14.07,
                    "balanceBefore": -40.84,
                    "balanceAfter": -54.91
                },
                {
                    "id": "cf7e7138-49c3-4cbb-bf2e-f203fcad5102",
                    "type": "debit",
                    "timestamp": "2016-11-22T16:39:00.457Z",
                    "currency": "AUD",
                    "amount": 18.65,
                    "balanceBefore": -22.19,
                    "balanceAfter": -40.84
                },
                {
                    "id": "e861542d-2ce0-4d4f-ac95-57b45a5dee97",
                    "type": "debit",
                    "timestamp": "2016-11-22T06:28:09.523Z",
                    "currency": "AUD",
                    "amount": 11.69,
                    "balanceBefore": -10.5,
                    "balanceAfter": -22.19
                },
                {
                    "id": "921d3cea-3aed-4caa-aabe-f4a98979f8b2",
                    "type": "debit",
                    "timestamp": "2016-11-21T15:53:42.395Z",
                    "currency": "AUD",
                    "amount": 22.19,
                    "balanceBefore": 11.69,
                    "balanceAfter": -10.5
                },
                {
                    "id": "ee24c73a-3085-4c60-b5e4-bff94b13d293",
                    "type": "credit",
                    "timestamp": "2016-11-19T21:09:47.394Z",
                    "currency": "AUD",
                    "amount": 11.69,
                    "balanceBefore": 0,
                    "balanceAfter": 11.69
                },
                {
                    "id": "801c8b16-b53b-450f-bd9c-27fbddd706f4",
                    "type": "credit",
                    "timestamp": "2016-11-19T09:18:06.020Z",
                    "currency": "AUD",
                    "amount": 0,
                    "balanceBefore": 0,
                    "balanceAfter": 0
                }
            ]
        },
    ]}

    beforeEach(() => {
        const props = {accounts: accounts }
        accountPage = renderComponent(Accounts, null, props);
    });

    it('checks if the accounts page has the cards rendered', () => {
        expect(accountPage.find('.test-account-balance')).to.exist;
    })

    it('checks if the correct balance is displayed', () => {
        expect(accountPage.find(CardTitle)).to.exist;
    })

    it('checks if the page has My accounts text rendered', () => {
        expect(accountPage.find('.mdl-card__title-text')).to.exist;
    })
})
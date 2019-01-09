const dump = [
    {
        id: '8bc115e3-175c-4d2e-8991-e72032d165d9',
        name: 'DOB',
        type: 'dateTime',
        options: {
            dateFrom: '2018-12-18T14:09:43.998Z',
            dateTo: '2018-12-18T14:09:43.998Z',
            formats: [
                {
                    value: 'dddd, DD MMMM, YYYY',
                    format: 'dddd, DD MMMM, YYYY',
                    example: 'Thursday, 23 August, 2018',
                    default: true
                }
            ]
        }
    },
    {
        id: 'f3ea9234-9d13-430e-89ad-04fb2d4683ae',
        name: 'Validity',
        type: 'duration',
        options: {
            decades: {
                title: 'Decades',
                selected: false,
                min: 0,
                max: 9,
                sufix: 'Decades',
                prefix: '',
                isSelectList: true
            },
            years: {
                title: 'Years',
                selected: false,
                min: 0,
                max: 1000,
                sufix: 'Years',
                prefix: ''
            },
            months: {
                title: 'Months',
                selected: false,
                min: 0,
                max: 11,
                sufix: 'Months',
                prefix: '',
                isSelectList: true
            },
            weeks: {
                title: 'Weeks',
                selected: false,
                min: 0,
                max: 4,
                sufix: 'Weeks',
                prefix: '',
                isSelectList: true
            },
            days: {
                title: 'Days',
                selected: true,
                min: 0,
                max: 29,
                sufix: 'Days',
                prefix: '',
                isSelectList: true
            },
            hours: {
                title: 'Hours',
                selected: false,
                min: 0,
                max: 23,
                sufix: 'Hours',
                prefix: '',
                isSelectList: true
            },
            minutes: {
                title: 'Minutes',
                selected: false,
                min: 0,
                max: 59,
                sufix: 'Minutes',
                prefix: '',
                isSelectList: true
            },
            seconds: {
                title: 'Seconds',
                selected: false,
                min: 0,
                max: 59,
                sufix: 'Seconds',
                prefix: '',
                isSelectList: true
            },
            miliseconds: {
                title: 'Miliseconds',
                selected: false,
                min: 0,
                max: 999,
                sufix: 'Miliseconds',
                prefix: ''
            }
        }
    },
    {
        id: '6dd9f9f1-2a38-48ec-b2fc-6175f9e712e6',
        name: ' C Card',
        type: 'creditCard',
        options: {
            formats: [
                {
                    name: 'American Express',
                    formats: [
                        {
                            iins: [
                                34,
                                37
                            ],
                            range: {
                                min: 15,
                                max: 15
                            }
                        }
                    ],
                    default: true,
                    selected: true
                },
                {
                    name: 'China UnionPay',
                    formats: [
                        {
                            iins: [
                                62
                            ],
                            range: {
                                min: 16,
                                max: 19
                            }
                        }
                    ],
                    selected: true
                },
                {
                    name: 'Discover Card',
                    formats: [
                        {
                            iins: [
                                6011,
                                64,
                                65
                            ],
                            range: {
                                min: 16,
                                max: 19
                            }
                        }
                    ],
                    selected: true
                }
            ],
            separator: ' '
        }
    },
    {
        id: '98955a85-bdbb-4d71-9461-0dacb66b5f62',
        name: 'CVV',
        type: 'cvv',
        options: {
            formats: [
                {
                    value: 'xxx',
                    format: 'xxx',
                    example: '123',
                    default: true
                }
            ]
        }
    },
    {
        id: '14e44283-9380-43a8-aa31-ca1d6b26e729',
        name: 'PAN Card',
        type: 'pan',
        options: {
            formats: [
                {
                    value: 'AAAAAxxxxA',
                    format: 'AAAAAxxxxA',
                    example: 'AAAAA1234A',
                    default: true
                }
            ]
        }
    },
    {
        id: '759c4fd4-a58b-434a-8cd2-c4b132990801',
        name: 'Aadhaar No.',
        type: 'aadhaar',
        options: {}
    },
    {
        id: 'c5f00afc-f8e4-4515-83c4-c263f1a80769',
        name: 'price',
        type: 'currency',
        options: {
            separator: ',',
            decimals: 2,
            min: 100,
            max: 99999,
            formats: [
                {
                    unicode: 'U+20B9',
                    htmlcode: '\\20B9',
                    name: 'INDIAN RUPEE SIGN',
                    symbol: '₹',
                    default: true
                }
            ]
        }
    },
    {
        id: '401efb8f-5cd1-41a5-82a7-431bf91daa8f',
        name: 'Employee',
        type: 'personName',
        options: {
            formats: [
                {
                    value: 'sur-name',
                    format: 'Surname, Name',
                    example: 'Clark, Abraham',
                    default: true
                }
            ],
            genders: {
                male: true,
                female: false
            }
        }
    },
    {
        id: '8a570c27-2ae3-4afb-83f8-f82a459bc222',
        name: 'City',
        type: 'city',
        options: {
            countries: [
                {
                    name: 'India',
                    isdCode: '91',
                    code2: 'IN',
                    code3: 'IND'
                }
            ],
            states: [
                {
                    id: 377,
                    name: 'Punjab',
                    country: 'IND',
                    latitude: 30.9,
                    longitude: 75.85
                },
                {
                    id: 160,
                    name: 'Karnataka',
                    country: 'IND',
                    latitude: 12.98,
                    longitude: 77.58
                }
            ]
        }
    },
    {
        id: '6220cafc-9099-439c-a939-8eafb05abc60',
        name: 'Address',
        type: 'streetAddress',
        options: {}
    },
    {
        id: '4f64828a-6ac3-495c-a126-8b9f4a10089d',
        name: 'Contact No.',
        type: 'mobile',
        options: {
            formats: [
                {
                    value: '(xxx) xxx-xxxx',
                    format: '(xxx) xxx-xxxx',
                    example: '(999) 999-9999',
                    default: true
                }
            ]
        }
    },
    {
        id: '4e1e04b0-b22b-4a9c-815b-bbb834519eec',
        name: 'Gender',
        type: 'gender',
        options: {
            formats: [
                {
                    value: 'malefemale',
                    format: 'Male/Female',
                    example: 'Male',
                    default: true
                }
            ]
        }
    },
    {
        id: '1fbe1c5f-8505-4fb2-bc2a-be8ae2b40390',
        name: 'Password',
        type: 'password',
        options: {
            upperCase: false,
            lowerCase: true,
            digit: true,
            specialChar: false,
            min: 4,
            max: 6
        }
    },
    {
        id: 'c0533314-914a-4bd9-8549-da57a7c98eda',
        name: 'Country',
        type: 'country',
        options: {}
    },
    {
        id: 'd95f3850-5110-40e7-88da-cadc45263438',
        name: 'State',
        type: 'state',
        options: {
            countries: [
                {
                    name: 'India',
                    isdCode: '91',
                    code2: 'IN',
                    code3: 'IND'
                }
            ]
        }
    },
    {
        id: 'e4f79eb3-b3cf-4379-83d2-da18dfd645f1',
        name: 'Pincode',
        type: 'pincode',
        options: {}
    },
    {
        id: '29b5ff3d-460a-4cb6-ab2f-c2ec716f106d',
        name: 'Latitude/Longitude',
        type: 'latLong',
        options: {
            countries: [
                {
                    name: 'India',
                    isdCode: '91',
                    code2: 'IN',
                    code3: 'IND'
                }
            ]
        }
    }
];




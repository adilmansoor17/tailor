export interface ChartType {
    series?: any;
    plotOptions?: any;
    stroke?: any;
    dataLabels?: any;
    chart?: any;
    legend?: any;
    colors?: any;
    labels?: any;
}

export interface Stat {
    title: string;
    icon: string;
    value: string;
}

export interface Chat {
    id?: number;
    name?: string;
    message?: string;
    image?: string;
    time?: string;
    align?: string;
    text?: string;
}

export interface Transaction {
    orderid: string;
    date: string;
    billingname: string;
    total: string;
    paymentstatus: string;
}

export interface person{
    tailor_id: String,
    name: String,
    age: String,
    phone: String,
    email: String,
    address: String,
    status: String
    
}

export interface measurement {
    tailor_id: String,
    name: String,
    user_id_ref:String

    lmbai: String,
    bazu: String,
    teera: String,
    gala: String,
    chhati: String,

    qamar: String,
    ghera: String,
    shalwar: String,
    pancha: String,

    packet_samne: String,
    packet_side: String,
    packet_shalwar: String,
    
    description: String,

    status: String
}
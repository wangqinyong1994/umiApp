import React from 'react';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Actions',
            render: (text: any, record: { id: any }) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            },
        },
    ];
    return <Table rowKey={d => d.id} dataSource={products} columns={columns} />;
};

export default ProductList;
-- Script de criação das tabelas para o projeto gerenciamento_combustivel

CREATE TABLE IF NOT EXISTS vehicles (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    placa VARCHAR(20) NOT NULL,
    vinculo VARCHAR(100) NOT NULL,
    vinculo_descricao VARCHAR(200) NOT NULL,
    tipo_combustivel VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS drivers (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS trips (
    id SERIAL PRIMARY KEY,
    roteiro VARCHAR(200) NOT NULL,
    data_viagem DATE NOT NULL,
    hora_saida VARCHAR(10) NOT NULL,
    km_saida INTEGER NOT NULL,
    hora_chegada VARCHAR(10) NOT NULL,
    km_chegada INTEGER NOT NULL,
    km_rodados INTEGER NOT NULL,
    km_bomba INTEGER NOT NULL,
    combustivel VARCHAR(50) NOT NULL,
    litros_geral NUMERIC(10,2) NOT NULL,
    preco_litro NUMERIC(10,2) NOT NULL,
    valor_total NUMERIC(10,2) NOT NULL,
    media NUMERIC(10,2) NOT NULL,
    motorista VARCHAR(100) NOT NULL,
    cupom VARCHAR(50),
    destino VARCHAR(100)
);

-- Dados de exemplo (opcional)
INSERT INTO vehicles (nome, placa, vinculo, vinculo_descricao, tipo_combustivel) VALUES
  ('Doblo', 'QYA2334', 'Educação', 'FUNDO MUNICIPAL DE EDUCAÇÃO - QSE', 'Flex')
ON CONFLICT DO NOTHING;

INSERT INTO drivers (nome) VALUES
  ('João Motorista')
ON CONFLICT DO NOTHING;

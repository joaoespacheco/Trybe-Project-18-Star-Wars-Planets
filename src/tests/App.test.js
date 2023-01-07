import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithContext } from './helpers/renderWithContext'
import planetsMock from './mocks/planetsMock'
import App from '../App';

describe('Testando a página de inicial', () => {
  it('Verificando se os elementos de filtro são renderizados na tela', () => {
    renderWithContext(<App />);

    const nameFilter = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    expect(nameFilter).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument();
  })

  it('Verificando se os elementos de tabela são renderizados na tela', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });
    
    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Tatooine-0")).toBeInTheDocument();
    });

    const tableRows = screen.getAllByRole("row");
    const tableCells = screen.getAllByRole("cell")


    expect(tableRows).toHaveLength(11);
    expect(tableCells).toHaveLength(110);
  })

  it('Verificando as funcionalidades do filtro de nomes', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });

    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Tatooine-0")).toBeInTheDocument();
    });

    const nameFilter = screen.getByTestId('name-filter');

    userEvent.type(nameFilter, 'Hoth');

    expect(screen.getByTestId("Hoth-0")).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(2);
  })
  
  it('Verificando as funcionalidades dos filtros de valores', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });
    
    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Tatooine-0")).toBeInTheDocument();
    });

    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    userEvent.selectOptions(columnFilter, "surface_water");
    userEvent.selectOptions(comparisonFilter, "igual a");
    userEvent.type(valueFilter, "100");
    userEvent.click(buttonFilter);

    expect(screen.getByTestId("Hoth-0")).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(3);

    userEvent.selectOptions(columnFilter, "rotation_period");
    userEvent.selectOptions(comparisonFilter, "maior que");
    userEvent.clear(valueFilter);
    userEvent.type(valueFilter, "25");
    userEvent.click(buttonFilter);
 
    expect(screen.getByTestId("Kamino-0")).toBeInTheDocument();
    const secondTableRows = screen.getAllByRole("row");
    expect(secondTableRows).toHaveLength(2);

    userEvent.selectOptions(columnFilter, "diameter");
    userEvent.selectOptions(comparisonFilter, "menor que");
    userEvent.clear(valueFilter);
    userEvent.type(valueFilter, "20000");
    userEvent.click(buttonFilter);

    expect(screen.getByTestId("Kamino-0")).toBeInTheDocument();
    const thirdTableRows = screen.getAllByRole("row");
    expect(thirdTableRows).toHaveLength(2);

  })

  it('Verificando as funcionalidades dos ordenação descendente de valores', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });
    
    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Tatooine-0")).toBeInTheDocument();
    });

    const columnOrder = screen.getByTestId('column-sort');
    const orderType = screen.getByTestId('column-sort-input-desc');
    const buttonOrder = screen.getByTestId('column-sort-button');

    userEvent.selectOptions(columnOrder, "population");
    userEvent.click(orderType);
    userEvent.click(buttonOrder);

    expect(screen.getByTestId("Coruscant-0")).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(11);
  })

  it('Verificando as funcionalidades dos ordenação ascendente de valores', async () => {
    global.fetch = async () => ({
      json: async () => (planetsMock),
    });
    
    renderWithContext(<App />);

    await waitFor (() => {
      expect(screen.getByTestId("Tatooine-0")).toBeInTheDocument();
    });

    const columnOrder = screen.getByTestId('column-sort');
    const orderType = screen.getByTestId('column-sort-input-asc');
    const buttonOrder = screen.getByTestId('column-sort-button');

    userEvent.selectOptions(columnOrder, "surface_water");
    userEvent.click(orderType);
    userEvent.click(buttonOrder);

    expect(screen.getByTestId("Bespin-0")).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(11);
  })

})

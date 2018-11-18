package projeto.model.dao;

import java.io.Serializable;
import java.util.List;

import javax.persistence.TypedQuery;

import projeto.model.entity.Cliente;
import projeto.model.entity.ValidaCPF;
import projeto.model.exception.CampoNaoInformadoException;
import projeto.model.exception.CpfInvalidoException;
import projeto.model.exception.ObjetoNuloException;

public class ClienteDAO extends AbstractDAO<Cliente> {

}

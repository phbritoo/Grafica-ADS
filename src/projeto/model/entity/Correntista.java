package projeto.model.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Correntista implements Serializable {
	
	@Id
	@Column(name="CPF", length=14)
	private String aCPF;
	
	@Column(name="Nome")
	private String aNome;
	
	@Column(name="Data_Nascimento")
	@Temporal(TemporalType.DATE)
	private Date aDataNascimento;
	
	@Column(name="Data_Cadastro")
	@Temporal(TemporalType.TIMESTAMP)
	private Date aDataCadstro;
	
	public String getCPF() {
		return aCPF;
	}

	public void setCPF(String aCPF) {
		this.aCPF = aCPF;
	}

	public String getNome() {
		return aNome;
	}

	public void setNome(String aNome) {
		this.aNome = aNome;
	}

	public Date getDataNascimento() {
		return aDataNascimento;
	}

	public void setDataNascimento(Date aDataNascimento) {
		this.aDataNascimento = aDataNascimento;
	}

	public Date getDataCadstro() {
		return aDataCadstro;
	}

	public void setDataCadstro(Date aDataCadstro) {
		this.aDataCadstro = aDataCadstro;
	}
	
	
	
}
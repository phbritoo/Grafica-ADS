package projeto.model.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity 
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS) 
public abstract class Pessoa implements Entidade, Serializable { 
	
	@Id 
	private String CPF; 
	
	@Column
	private String nome;
	
	@Column
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataNascimento;
	
	@Embedded
	private Endereco endereco;
	
	public String getCPF() {
		return CPF;
	}
	public void setCPF(String cPF) {
		CPF = cPF;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Date getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public Endereco getEndereco() {
		return endereco;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	
	public Object getPK() {
		// TODO Auto-generated method stub
		return this.CPF;
	}
	
	
	
}

package com.bluedot.framework.simplemybatis.bean;

import java.util.List;
import java.util.Map;

/**
 * @version: v1.0
 * @className: TableInfo
 * @Description: 封装数据库表的结构信息
 * @Author: KangLongPing
 * @Date: 2021/8/20 9:13
 */
public class TableInfo {

	// 表名
	private String tableName;

	// 表内字段集合
	private Map<String, ColumnInfo> columnInfoMap;

	// 主键
	private List<ColumnInfo> primaryKeys;

	// 外键集合
	private List<ColumnInfo> foreignKeys;

	public TableInfo() {
	}

	public String getTableName() {
		return tableName;
	}

	public void setTableName(String tableName) {
		this.tableName = tableName;
	}

	public Map<String, ColumnInfo> getColumnInfoMap() {
		return columnInfoMap;
	}

	public void setColumnInfoMap(Map<String, ColumnInfo> columnInfoMap) {
		this.columnInfoMap = columnInfoMap;
	}

	public List<ColumnInfo> getPrimaryKeys() {
		return primaryKeys;
	}

	public void setPrimaryKeys(List<ColumnInfo> primaryKeys) {
		this.primaryKeys = primaryKeys;
	}

	public List<ColumnInfo> getForeignKeys() {
		return foreignKeys;
	}

	public void setForeignKeys(List<ColumnInfo> foreignKeys) {
		this.foreignKeys = foreignKeys;
	}

	public TableInfo(String tableName, Map<String, ColumnInfo> columnInfoMap, List<ColumnInfo> primaryKeys, List<ColumnInfo> foreignKeys) {
		this.tableName = tableName;
		this.columnInfoMap = columnInfoMap;
		this.primaryKeys = primaryKeys;
		this.foreignKeys = foreignKeys;
	}

	@Override
	public String toString() {
		return "TableInfo{" +
				"tableName='" + tableName + '\'' +
				", columnInfoMap=" + columnInfoMap +
				", primaryKeys=" + primaryKeys +
				", foreignKeys=" + foreignKeys +
				'}';
	}
}

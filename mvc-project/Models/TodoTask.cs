namespace Todo.Models;

using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class TodoTask
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]
    [JsonPropertyName("Id")]
    public string? Id { get; set; }

    public string NameTask { get; set; } = null!;

    public string Description { get; set; } = null!;
}
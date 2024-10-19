from rest_framework import serializers
from .models import VacationRequest

class VacationRequestSerializer(serializers.ModelSerializer):
    message = serializers.CharField(read_only=True)
    status = serializers.CharField(read_only=True)

    class Meta:
        model = VacationRequest
        fields = ['start', 'end', 'status', 'message']

    def create(self, validated_data):
        validated_data['employee'] = None  # For when you decide to implement user management and authentication in the future.
        vacation_request = VacationRequest.objects.create(**validated_data)
        return vacation_request
    
    
class VacationResponseSerializer(serializers.Serializer):
    vacation = serializers.IntegerField()
    status = serializers.BooleanField()
    message = serializers.CharField(max_length=500, required=False, allow_null=True)
    
    def validate_vacation(self, value):
        try:
            vacation_request = VacationRequest.objects.get(id=value)
        except VacationRequest.DoesNotExist:
            raise serializers.ValidationError("Vacation not found.")
        
        if vacation_request.status != "P":
            raise serializers.ValidationError(f"Vacation alredy {vacation_request.get_status_display()}")
        
        return value
    

class VacationAnsweredSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacationRequest
        fields = ["employee", "start", "end", "status", "message"]